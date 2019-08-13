import masterTemplate from "@/components/Level/Master/master-template.js";

export const metadata = {
  css: `${masterTemplate}@keyframes fadeIn {
    from { 
      background-color: #2a2a2a;
    }
  
    to {
      box-shadow: 0 0 1em #AAF9FF;
      background-color: #CCFFFB;
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      bottom: -1.5em;
    }
  
    90% {
      bottom: 0;
    }
  }
  
  .light-bulb {
    position: relative;
    height: 100px;
    width: 100px;
    border: none;
    border-radius: 50%;
    background-color: #2a2a2a;
    animation: fadeIn .2s ease-in-out,
      bounce .8s 1s cubic-bezier(.17,.67,.51,1) infinite;
  }
  </style>`,
  description: `
    Select <code>light-bulb</code> class element to turn on the light bulb.

    <h4 class="example">Example</h4>
    <p>
        <code>.box</code> selects all <code>&lt;div class=&#34;box&#34;&gt;</code> elements.
    </p>
  `
};
