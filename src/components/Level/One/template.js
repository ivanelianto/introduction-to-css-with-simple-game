import masterTemplate from "@/components/Level/Master/master-template.js";

export default `${masterTemplate}@keyframes fadeIn {
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
    top: -1.5em;
  }

  90% {
    top: 0;
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
    bounce .8s 1s cubic-bezier(1,-0.11,.18,1.1) infinite;
}
</style>`;
