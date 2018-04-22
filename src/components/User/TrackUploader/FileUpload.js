import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './fileUpload.scss';

const FileUpload = ({
  label,
  maxFiles,
  allowMultiple,
  files,
  apirUrl,
  setRef,
}) => {
  return (
    <div styleName="FileUpload">
      <h5>{label}</h5>
      <div styleName="FileUpload__browse-dropzone">
        <input type="file" id="file" />
        <label htmlFor="file">
          Drag & Drop your files or&nbsp;
          <span>
            Browse
          </span>
        </label>
      </div>
    </div>
  );
}

FileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  apirUrl: PropTypes.string,
  allowMultiple: PropTypes.bool,
  maxFiles: PropTypes.number,
  files: PropTypes.array,
  setRef: PropTypes.func,
};

FileUpload.defaultProps = {
  maxFiles: 1,
  apirUrl: "/api",
  allowMultiple: false,
  setRef: () => null,
  files: [],
};

export default CSSModules(FileUpload, styles, { allowMultiple: true });
