import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './fileUpload.scss';

import { FilePond, File } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

const FileUpload = ({
  label,
  maxFiles,
  allowMultiple,
  files,
  apirUrl,
}) => {
  return (
    <div styleName="FileUpload">
      <h5>{label}</h5>
      <FilePond allowMultiple={allowMultiple} maxFiles={maxFiles} server={apirUrl}>
        {files.map(file => (
          <File key={file} source={file} />
        ))}
      </FilePond>
    </div>
  );
}

FileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  apirUrl: PropTypes.string,
  allowMultiple: PropTypes.bool,
  maxFiles: PropTypes.number,
  files: PropTypes.array,
};

FileUpload.defaultProps = {
  maxFiles: 1,
  apirUrl: "/api",
  allowMultiple: false,
  files: [],
};

export default CSSModules(FileUpload, styles, { allowMultiple: true });
