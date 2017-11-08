import React, { Component } from 'react';
import ReactDom from "react-dom";
import { Card, Icon, Modal } from 'antd';
import Cropper from "./lib/index";

import styles from "./Header.css";
import Body from "./Body";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card className={styles.card}>
          <div className={styles.content}>
            <div className={styles.cover}>
            <img style={{width:1000,height:240}} src="https://pic2.zhimg.com/80/v2-e375dc638290635e783abea5ec9c43d1_r.jpg" />
            </div>
            <div className={styles.main}>
              <div className={styles.avatar}>
                <PhotoEdit />
              </div>
              <div className={styles.details}>
                <h1><span>name</span></h1>
                <div>个人资料</div>
                <div></div>
              </div>
            </div>

          </div>
        </Card>
        <Body />
      </div>
    );
  }
}

class PhotoEdit extends Component {

  constructor(props) {
    super();
    this.state = {
      modalVisible: false,
      img: null,
      croppedImg: "http://p1.pstatp.com/thumb/3831000a6a0b7aca0b7d",
    };
  }

  handleFileChange = (dataURI) => {
    this.setState({
      img: dataURI,
      croppedImg: this.state.croppedImg,
      modalVisible: true
    });
  };

  handleCrop = (dataURI) => {
    this.setState({
      modalVisible: false,
      img: null,
      croppedImg: dataURI
    });
  };

  handleCancel = () => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    return (

      <div className={styles.avatar_photo}>
        <div className={styles.avatar_edit}>
          <div className={styles.camera}>
            <Icon type="camera" style={{ fontSize: 32, color: "white" }} />
          </div>
          <FileUpload handleFileChange={this.handleFileChange} />
        </div>
        <img src={this.state.croppedImg} width="160" />

        {this.state.modalVisible &&
          <Modal
            title="编辑头像"
            wrapClassName="vertical-center-modal"
            visible={this.state.modalVisible}
            onCancel={this.handleCancel}
            footer={null}
          >
            <div className="AvatarCropper-base">
              <Cropper
                image={this.state.img}
                width={160}
                height={160}
                onCrop={this.handleCrop}
                onRequestHide={this.handleCancel}
                closeButtonCopy="取消"
                cropButtonCopy="保存"
              />
            </div>
          </Modal>
        }
      </div >
    );
  }
}

class FileUpload extends Component {
  constructor(props) {
    super();
  }

  handleFile = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    if (!file) return;

    reader.onload = function (img) {
      ReactDom.findDOMNode(this.refs.in).value = '';
      this.props.handleFileChange(img.target.result);
    }.bind(this);
    reader.readAsDataURL(file);
  };

  render() {
    return (
      <input ref="in" type="file" className={styles.input} accept="image/*" onChange={this.handleFile} />
    );
  }
}

