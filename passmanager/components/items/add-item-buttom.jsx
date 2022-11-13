import React from "react";
import Head from "next/head";
import AddItemForm from '../forms/add-item'

function Index() {
    return (
        <>
        <div>
           
<label id="button" htmlFor="my-modal" type="button" data-modal-toggle="popup"
                className="pt-3  pl-3.5 w-16 h-16 btn bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" className="w-6 h-6 inline-block">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
          </svg>
        </label>


    {/* The button to open modal */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div  className="modal">
  <div className="modal-box">
   
<AddItemForm/>

  
  </div>
</div>


        </div>
        </>
    );
}

export default Index;

