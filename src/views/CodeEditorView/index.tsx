import './CodeEditorView.scss';

import CodeEditorTemplate from '../../assets/images/code-editor.jpg';
import { useState } from 'react';

const CodeEditorView = () => {
  const [projectName, setProjectName] = useState('');

  return (
    <div className='code-editor-view'>
      <div className='left-content'>
        <img src={CodeEditorTemplate} alt='Code Editor' />
      </div>
      <div className='right-content'>
        <h3>{projectName || 'Seu projeto'}</h3>
        <input
          type='text'
          name='project-name'
          placeholder='Nome do seu projeto'
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CodeEditorView;
