import React, { Component } from 'react';
import ReactDom from "react-dom";
import { Card, Icon, Modal } from 'antd';
import Cropper from "./lib/index";

import styles from "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (<div>
      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.cover}>
          </div>
          <div className={styles.avatar}>
            <PhotoEdit />
          </div>
        </div>
      </Card>
      <Card className={styles.card}></Card></div>
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
      <div className={styles.wrap}>
        <div className={styles.avatar_photo}>
          <div className={styles.avatar_edit}>
            <Icon type="camera" />
            <FileUpload handleFileChange={this.handleFileChange} />
          </div>
          <img src={this.state.croppedImg} width="160" />
        </div>
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
      </div>
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

