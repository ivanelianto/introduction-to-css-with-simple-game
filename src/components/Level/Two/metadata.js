import masterTemplate from "@/components/Level/Master/master-template";

export const metadata = {
  css: `${masterTemplate}
    .chemical {
      position: relative;
      border: 1px solid #ddd;
      height: 40%;
      width: 25px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      transition: all 1s ease-out;
    }

    .chemical:not(:last-child) {
      margin-right: 2em;
    }

    #copper {
      background: linear-gradient(0deg, #81d4fa 70%, #202020 0%);
    }

    #copper::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #81d4fa;
      border-radius: 50%;
      top: 30%;
      left: 50%;
      animation: fly 1s .8s ease-out infinite;
    }

    #manganese {
      background: linear-gradient(0deg, #f06292 20%, #202020 0%);
    }

    #nickel {
      background: linear-gradient(0deg, #81c784 70%, #202020 0%);
    }

    #nickel::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #81c784;
      border-radius: 50%;
      top: 30%;
      left: 50%;
      animation: fly 1s ease-out infinite;
    }

    @keyframes fly {
      0% {
        top: 50%;
        left: 50%;
        opacity: 1;
        transform: scale(1);
      }
      25% {
        top: 25%;
        left: 10%;
      }
      50% {
        top: 20%;
        left: 30%;
      }
      75% {
        top: 15%;
        left: 40%;
      }
      100% {
        top: 10%;
        left: calc(50% - 10px / 2);
        opacity: 0;
        transform: scale(1.25);
      }
    }
  </style>`,
  description: `
    Select element with id <code>manganese</code> to fill it up to 70%.

    <h4 class="example">Example</h4>
    <p>
        <code>#cool</code> selects all element with <code>id=&#34;cool&#34;</code> elements.
    </p>`
};
