import masterTemplate from "@/components/Level/Master/master-template.js";

export const metadata = {
  css: `${masterTemplate}
  @keyframes rotating {
    0%, 100% {
      transform: rotate(2deg);
    }

    50% {
      transform: rotate(-2deg);
    }
  }

  h1 {
    position: relative;
    font-family: Arial;
    animation: rotating .5s cubic-bezier(1,-0.11,.18,1.1) infinite;
    background-color: #000;
    box-shadow: 0 0 1em #333;
    padding: 1em;
    transition: all .2s linear;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  @keyframes flip {
    from { transform: rotateX(180deg); }
    to { transform: rotateX(0deg); }
  }
  </style>`,
  description: `
    Select <code>h1</code> type element to highlight the text.

    <h4 class="example">Example</h4>
    <p>
        <code>div</code> selects all <code>&lt;div&gt;</code> elements.
    </p>
  `
};
