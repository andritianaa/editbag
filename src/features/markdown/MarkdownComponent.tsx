import {remark} from 'remark';
import html from 'remark-html';

export default function MarkdownComponent({ content }) {
  const processedContent = remark().use(html).processSync(content).toString();
  
  return <div dangerouslySetInnerHTML={{ __html: processedContent }} />;
}