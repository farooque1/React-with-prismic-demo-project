import { PrismicRichText,useSinglePrismicDocument, useFirstPrismicDocument } from '@prismicio/react'
import * as prismicH from "@prismicio/helpers";

import './App.css';

function App(image) {

  
  const [document] = useFirstPrismicDocument()

  return (

    <div className="App">

      { document && ( <PrismicRichText field={document.data.heading} /> )}
      { document && ( <PrismicRichText field={document.data.image} /> )}
      { document && ( <PrismicRichText field={document.data.para} /> )}

      <div
      className="blog-avatar"
      style={{ backgroundImage: `url(${image})` }}
    />


      <div>
      {document && ( <PrismicRichText field={document.data.title1} /> )}
      { document && ( <PrismicRichText field={document.data.title2} /> )}
      </div>
      
      {/* <div>
      <img src={document.data.image}/>
      </div> */}

    </div>
  );
}

export default App;
