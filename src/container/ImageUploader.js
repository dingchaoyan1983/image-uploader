import React from 'react';
import { prop, isNil } from 'lodash/fp';

export default class ImageUploader extends React.Component {
    constructor() {
        super();
        this.uploadFile = this.uploadFile.bind(this);
        this.changeFile = this.changeFile.bind(this);
        this.fileLoaded = this.fileLoaded.bind(this);

        this.fileReader = new FileReader();
        this.fileReader.addEventListener('load', this.fileLoaded)
        this.state = {
            src: null
        }
    }

    render() {
        const width = prop('width')(this.props) || 0;
        const height = prop('height')(this.props) || 0;

        let imageClassName = '';

        if (width > height) {
            imageClassName = 'heightAdjust';
        } else {
            imageClassName = 'widthAdjust';
        }

        return <div className="image-uploader" onClick={this.uploadFile}>
                    <input type="file" ref="fileInput" onChange={this.changeFile}/>
                    {
                        isNil(this.state.src) ? <i className="icon-plus uploader-plus"/> : <img src={this.state.src} className={imageClassName}/>
                    }
               </div>
    }

    uploadFile() {
        this.refs.fileInput.click();
    }

    changeFile() {
        this.file = this.refs.fileInput.files[0];
        if(this.file) {
            this.setState({
                src: this.fileReader.readAsDataURL(this.file)
            });
        }
    }

    fileLoaded() {
        this.setState({
            src: this.fileReader.result
        })
    }
}