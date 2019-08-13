import masterTemplate from "@/components/Level/Master/master-template.js";

export default `${masterTemplate}@keyframes rotating {
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
</style>`;
