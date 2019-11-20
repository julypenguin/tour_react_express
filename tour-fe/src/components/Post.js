import React, { useState, useEffect, Fragment } from 'react';
import moment from "moment";
import ReactMarkdown from 'react-markdown';
import Cookies from 'js-cookie';
import Notfix from './Notfix';
import CodeBlock from '../highlight';
import Maps from '../containers/MapsContainer';

const Post = ({
  history,
  match,
  getPost,
  updatePost,
  deletePost,
  clearDeleteErr,
  post,
  linkTo,
  updatePostError,
  deletePostError,
  isRequestAgain
}) => {

  const [text, setText] = useState({ title: '', content: '' });
  const [edit, setEdit] = useState(false);
  const latLngCenters = [
    { id:'6', latLng: { lat: '35.689739', lng: '139.700358' } },
    { id:'7', latLng: { lat: '35.677116', lng: '139.703973'} },
    { id:'8', latLng: { lat: '35.628459', lng: '139.783475'} },
    { id:'9', latLng: { lat: '35.519690', lng: '138.748626'} },
    { id:'10', latLng: { lat: '35.709879', lng: '139.773844'} },
    { id:'11', latLng: { lat: '36.343121', lng: '138.636605'} },
    { id:'12', latLng: { lat: '35.704997', lng: '139.75423'} },
    { id:'13', latLng: { lat: '35.714203', lng: '139.790165'} },
    { id:'14', latLng: { lat: '35.716358', lng: '139.776493'} },
  ]

  const { title, content, createdAt } = post;
  const { title: titleText, content: contentText } = text;
  const { id } = match.params;

  const handleEdit = () => {
    setEdit(!edit);
  }

  const handleCancel = () => {
    handleEdit();
  }

  const handleDelete = () => {
    const isDelete = window.confirm('真的要刪除嗎？')
    if (isDelete) {
      console.log('delete')
      deletePost(id);
    }
  }

  const handleUpdate = () => {
    updatePost(id, {
      title: titleText,
      content: contentText,
    });
    handleEdit();
  }

  const onChangeText = (key, value) => {
    setText({
      ...text,
      [key]: value,
    })
  }

  useEffect(() => {
    if (!linkTo) {
      getPost(id);
      setText({title, content});
    }
    if (updatePostError) alert('更新失敗，請稍後再試');
    if (updatePostError) alert(updatePostError);
    if (deletePostError) alert('刪除失敗，請稍後再試')
    if (linkTo) history.push('/');
    return () => {
      clearDeleteErr()
    }
  },[clearDeleteErr, content, deletePostError, getPost, history, id, linkTo, title, updatePostError, isRequestAgain])

  return (
    <main className="main">
      <div className="content">
        <div className="single-post-outer">
          <div className="single-post">

        { !edit 
          ? <Fragment>
              <h5>{moment(createdAt).format("LLLL")}</h5>
              <h1 className="single-post-title">{ title }</h1>
              <ReactMarkdown 
                className="single-post-content"
                source={content}
                renderers={{ code: CodeBlock }}
              />

            {latLngCenters.map(
              latLngCenter => id === latLngCenter.id
                ? <Maps key={id} match={match} latLngCenter={ latLngCenter.latLng }/>
                : null
            )}
              
            </Fragment>
          : <Fragment>
              <textarea className="single-post-title" value={titleText} onChange={(e) => onChangeText('title', e.target.value)} />
              <textarea className="single-post-content" rows="27" value={contentText} onChange={(e) => onChangeText('content', e.target.value)} />
            </Fragment>
        }

            <div className="option__btn">
              <div className="back__btn" onClick={() => history.push('/')}>上一頁</div>

            {
              !Cookies.get('nickname') ? null :
                !edit
                  ? <div>
                      <div className="edit__btn" onClick={handleEdit}>編輯</div>
                      <div className="del__btn"　onClick={handleDelete}>刪除</div>
                    </div>
                  : <div>
                      <div className="ok__btn" onClick={handleUpdate}>確認</div>
                      <div className="cancel__btn" onClick={handleCancel}>取消</div> 
                    </div>
            }

            </div>
          </div>
        </div>
      </div>
      <Notfix />
    </main>
  );
};

export default Post;