
import { renderToStaticMarkup } from 'react-dom/server';
import { careerData } from '../../data/careerData';

export const ExportButton = () => {
  const handleExport = () => {
    const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>Career History</title>
      <style>
        body { font-family: 'Malgun Gothic', '맑은 고딕', sans-serif; color: #333; }
        h1 { text-align: center; color: #1a365d; }
        .project { margin-bottom: 30px; border-bottom: 1px solid #e2e8f0; padding-bottom: 15px; }
        .title { font-size: 16pt; font-weight: bold; color: #2b6cb0; margin-bottom: 5px; }
        .meta { font-size: 11pt; color: #4a5568; margin-bottom: 10px; }
        .table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
        .table th, .table td { border: 1px solid #cbd5e0; padding: 8px; font-size: 10pt; text-align: left; vertical-align: top; }
        .table th { background-color: #f7fafc; width: 20%; color: #4a5568; }
        .desc { font-size: 11pt; line-height: 1.6; margin-top: 10px; }
        .arch { font-size: 10pt; color: #4a5568; margin-top: 10px; padding: 10px; background-color: #f7fafc; border-left: 4px solid #cbd5e0; }
      </style>
    </head><body>
    <h1>Career History</h1>
    `;

    // Helper functions inside handleExport instead of component body
    const getLanguageStr = (lang: any) => {
      if (!lang) return '';
      if (Array.isArray(lang)) return lang.join(', ');
      return [...(lang.scripts || []), ...(lang.framework || []), ...(lang.stylesheet || []), ...(lang.other || [])].join(', ');
    };

    const getToolStr = (tool: any) => {
      if (!tool) return '';
      if (Array.isArray(tool)) return tool.join(', ');
      return [...(tool.designTool || []), ...(tool.versionControl || []), ...(tool.library || []), ...(tool.cms || []), ...(tool.framework || []), ...(tool.other || [])].join(', ');
    };

    const contentNodes = careerData.map(item => (
      <div className="project" key={item.id}>
        <div className="title">{item.projectName}</div>
        <div className="meta">
          {item.duration} | {item.client} | {item.role} ({item.roleType === 'lead' ? 'PL' : 'Member'})
        </div>
        <table className="table">
          <tbody>
            <tr>
              <th>환경</th>
              <td>{item.osEnv}</td>
            </tr>
            <tr>
              <th>언어/프레임워크</th>
              <td>{getLanguageStr(item.language)}</td>
            </tr>
            <tr>
              <th>도구/라이브러리</th>
              <td>{getToolStr(item.tool)}</td>
            </tr>
            {item.phase && (
              <tr>
                <th>수행단계</th>
                <td>{item.phase}</td>
              </tr>
            )}
          </tbody>
        </table>
        
        <div className="desc">
          {Array.isArray(item.description) ? (
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {item.description.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          ) : (
            <p style={{ margin: 0 }}>{item.description}</p>
          )}
        </div>

        {item.architecture && (
          <div className="arch">
            {item.architecture}
          </div>
        )}
      </div>
    ));

    const contentHtml = renderToStaticMarkup(<>{contentNodes}</>);
    const footer = "</body></html>";
    const sourceHTML = header + contentHtml + footer;

    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'career_history.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
  };

  return (
    <button 
      onClick={handleExport}
      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg shadow-sm transition-all active:scale-[0.98] group ml-2"
    >
      <span className="material-symbols-outlined text-[18px] group-hover:animate-bounce">
        download
      </span>
      <span className="text-sm font-bold">Word Export</span>
    </button>
  );
};
