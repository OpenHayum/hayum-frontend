import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './fileUpload.scss';

import { FilePond, File } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

const FileUpload = ({ label, files }) => {
  return (
    <div styleName="FileUpload">
      <h5>UPLOAD AUDIO THUMBNAIL:</h5>
      <FilePond allowMultiple={true} maxFiles={1} server="/api">
        {files.map(file => (
          <File key={file} source={file} />
        ))}
      </FilePond>
    </div>
  );
}

FileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  maxFiles: PropTypes.number,
  files: PropTypes.array,
};

FileUpload.defaultProps = {
  maxFiles: 1,
  files: [],
};

export default CSSModules(FileUpload, styles, { allowMultiple: true });
