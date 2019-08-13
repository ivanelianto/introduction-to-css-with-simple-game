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

  @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  }

  h1 {
    position: relative;
    font-family: Arial;
    animation: rotating .5s cubic-bezier(1,-0.11,.18,1.1) infinite;
  }
  </style>`,
  description: `
    Select <code>h1</code> type element to highlight the text.

    <h4 style="margin: 1.5em 0 .5em 0">Example</h4>
    <p>
        <code>div</code> selects all <code>&lt;div&gt;</code> elements.
    </p>
  `
};
