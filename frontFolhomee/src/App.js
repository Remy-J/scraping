import React, { Component } from 'react';
import './App.css';
import  Result from './components/Result'

class App extends Component {
  render() {
  return (
    <div className="App">
      <header>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAABlCAMAAACMReHqAAAA9lBMVEX///8AM8z/ZgAAL8sAJMrx9PwAMcw8XNUAKcsoUdMALcsAK8sAG8kAJ8sAKsvG0fPU1/L/YAAVSNKVo+auuuzp7fp2jOCqteqer+r/XgAsSND6+/5KYNUAGsl/lON2iN+Pn+VYdNvr7/sADMg0VtT/18H/VwDN2Pb/+/b/8ehQbNhed9v/awBme9uarOm3w+/b4vf/3s3/nW4AAMb/ey+8xu//so3/qXv/h0P/kVb/xab/bh3/iU//1LwPOc3/3cf/6tv/s4j/vp7/q4j/dg//eC//up3/hDj/jFf/oHdLZ9j/zK//hUf/nmb/3tQNQND/onz/ex9IR88yAAARbElEQVR4nO1daXvauBa2YyOMN3CAgCFsgWyEJCQtTZs2lC5pZ+hkmP7/P3MlSzJejlhyA7R99H5oEywLWa/O0dnkKIqEhISEhISEhISEhISEhISEhISEhISExI5QbRXzux6DxHZRaTiONuuUhpldj0Ria2jaqoo0y9amzev6rgcjsR3UO45KgEzHbvSu8uVdD0hiC6j3A9Y1RIjXtdxFsSw1/R+PTF/HnPdmDd3SENb0up1rloa7HpXEhnFoqMgqDIsXOV3HEo80x9ByB/mh3OP/YGSmuqrtY+Eu59s5w3FMhCXe0fc7xdNdD01iY6hPHdVEheDn8nUzq+sukXhLb1gXlVO5xf+ZyBDWZwX+W7l6UVN1i9h2rj7OHRa5TV+XC+APAtHw1n4h8kH+aqrbjkW2eFMfHwUflvv77d2MT+KlUR/lFSVrqKaRMNpHzf7YdjVV1Vvk19OaozWKuxihxIujpTeulKNDrOFrSVetPhxdzExVq2EFPxxbWN9blZ2MUeJl0bKR0ccKHXtu1hhy0FuGaheUvGqqpoOQXtr6CCVeGpeYSIcQSVg39wHWSy7Si6dY4N1p20Iaklm53x2XOtL0avBjOeuoVkrD48/HCPVqpqr3MsqBjc186b7/1qhf6AhpfJuu97Csm+mcyxTv6pqq94nDdqlhJb/VMUq8MC4MhOy5aVbGNryVS8l6VVdV1ckGTnpeReorGZr/fVG/tNW5nBNksIZ3Z0lZr2DSnVYQii/oROS3N0SJl0bHUTUzbowTWU96bhWEVDSjcj7DnF/KuNzviw5xwJJud7nnqkYuKusVLNyqapOFcDrG5lznZbNvmV+wbuP8fNcj2BBIHl1Tr9Of51zVUudMtLGpZyBVb2M5d4icJ9qX9nMwRstGMMy3pzPHcQwt27pelsitsq9ZYcnxpofxj4vs4+mieycPT9/3PIzB20//ThY0LMyCzgrCBuUeub4v8G+vBbMGx7k7gimerWtcTQ1Vs9OcYy6wDW/1eHeFLnbj2whZfaLbkX6ZnPSKbmoATAPqO4LTVk3XLRTAdO1Zv7SQzqIddOseLt9bWFOrFv+4qdOP98V3/vhr4HveXgDP9x9vb4RN8w3SmSNeQZcOadAQLP0SPGuafgC1zrpgY60rXnMQAjlHMC9lzLq7z2R9+MptFJWOpdWudMJ5qnWFFtklgcyFpA8vbIOUaM3bW3Zu0R1FPWhmrkI6baolSacD1YSkH3/1GeEcnv9uImg8soPeHFEuotQIroNiRS4b4KypRhNqnTXh1o21SM/0HRUhkQIm+3oYpan0K2RhkjI6pB+kpfE5pNevZsBdptsS7+8vRjoSkH7+5CUoD2gffIabX1PSkQZr2GFNC66nbCaGHZBOqiE1XczKsOaqbi/CwBBb7QiS82eRfnTR0MB7HHGwb9Okf3z005QT+O/OoPYlnbHUB3clVmSssmBn+vatk04yatp4UQj9CLNuaRHWpyamBNxvQtJRHJaQ9PJ+ZJ2QpvPfTEeUztkw6feQmDPWX0+AG6qM9MDCTYEpd3xVoP5D0hOzBs9xSHqi9Rqk17MulvPFaZMhseFDa06pjJFqtMA1zUknhXVRuCLSyzkrZNzSTVKPZ4S8C/ecze7pDxHKPT/4Z/6J9wjI+hUnHelAtqLGNZnThsfISU/Omr5Q0hONtdVJDzLn6jKHimh4i1tzpS4Sjp+RrtWu83EcwR1nenyRa7reL45wy0prZpuIzyGs4Tcq6ccRxge398cfPz58e+eF+t57m2a9yElX3bSCvwhVmQFKbkg62k/OGmgiMNKtzmmi9aphsqOssUS3UwSyTlmvukQHm1nwKzjpOQHJSVxwzp1au8ynK3M95dJu9kBrbpOkn7/nYu19uOf8np1/Crd5/1b0JaAKL7mh5nJb8Bg56bWVZo2RLlpBS5EJ6qJWSYkX9i1szeFBVQy8Q+8jlKymoghJXy2yNuoyibansRvqxS7TYaC5uFHSb0PX/E3s8/N3nHXvOHlPe26XaGp8YjKzuZnqgg8TIX2lWeOkC1bQMpRzxsoJ8fLMUi1Uvmpgzqt57KS3oVbrkX7EdjuUttiGfK/vQktyg3v68QnfuyfJS/ec9J9JBd+MGKPuYUzBdyKXrA48xm2SnsETqzmrFkGc4tZmDZsPdpUsX/MQarQe6czoRQbgygzHGpMOwGLcoKT/xZX7JN3XZybr/n3iQpR01b6KXClZEXfEEoTstkg6ibqYs9XLnYY1k8RkLLJp9S0EVtCtRXqdxyzA3WlEpws5gFG6OdJvuL32AHV2S1n3/kmIeox0bTwfcUaPxiDMLDzGZ5EuMhAWopxzI2caVsEpdtVYwKCkIwNyotci/ZrSamZh+6VF+4Kc1c2p9ycq6P4d2Nn5d6YHErt6KxZdsXr883orFqwye8kOKbYm6QHn5loFbm0SHzcPCUVDDYFfuhbpB7SxLQjBDKkJlKSLYHOSzhT4QJBO/XECrolLl/bGdHlYfoRlgw5UhZcYb7Yl0onnDVa7itHENpyjqZZzRML1ljYGNtt1SK/P0KKZ4DYxUtM70MZI/0hJ9b6JuntNRX0Qf5ILiz51kfWqUWEqjynnziVtgGZwp1ty2crYAzMRwPn5j/sJGF5WDiykOe0etuGzZZJYVxuAmghJXyFQUKbRSVFsEm8ntIGTTlNsjHRuqgmzqG9og5PYHNU7jHQlx/ZbarExBaDVhn1Kugp3ykkftw4iEEkyI13rNaONl+SuFSLnVvy0GsPkw4nvn7z+AdxC5NysYp2LVLsZEOIAQUJGOpoVq3NcwQqFpqYQEm8xVDkCzuH6pOMJjeIgq4EK9z8qyI/C7h7oojj5GP0wQznFCyvvMuuTrGQec++OFEa6AXcahmFdYw6nKxgCD8NqkcZGA4zYRkEiLRpQ0/7geSTY7PnpDOKBg5CGVxP20NUgJGwgcypOrSJHn6MLR3kpHShdb5t4PPci9T3rk44nPAZmVCck/Yw6bN47YXeT94DTlpmaXJu02RqzhmFC1bhU6lNKug13CmbZRI3hLJsorB9iiDlH41FqKs8fPc+/+/QV055Ub5hzjRxhymPv2SHqXem4CDD9wdSqvoh0QTw3AFWPwOJ6BukwBKTDtnvQgpEeE4tMNiRdGbMdt8NDzNp+mZOuCoR3C6ST/ZzkMroEjdxVOHFvfJpMuMP/x+6otxpII1mZfBepDo3KjHQoPfyypFNLzuz9QqQrj5T0WIj2qDcn/VSlxps7ZTJvj8iLHswdk543IkEiZOqH3NL+6fmBhJ+/9t7HXJaWi204bEOPiJz3qYk53NfMdIBpHdJpPlKDUyoBmgZdFpsjXYNJfxL3B5FezkWcyyb7QkaNQ+yxkHS48m8LpGemXdvGW63jGIaLPUuD7+7YE6FG6a23FzVUhq9QkH0dWZqqT/k89y3USPW9DukVSvoCv5GaP1Y6W7kpSWfZloSii+IcUu/lGpqTXu9ZkS8wgyMCIenweENDLmoJ6a8EQ+Ckm9HG3WWGXL0wuq5Ui+3mQeuyjw0zN0cN6K+eHwj42QdvMIneMLZJVuYaWz9OJxw2ns10oV9oyFkRCIpAqUeGLHEgmJbRAF7Ccwy52ITqvBAhQfoX6pG9h71WJUy2+7EobXk/Qnqo4IP+3eDZOekNWKtxl23WrkadHsEQGOnmtBJtvNbp4QMbqRY9u/Tk00jTD8+L+yzDCpbGa5UfW2QfdgE6uMs27nfm6MNOWaYh8sj4NzBHPm06PMNlmxXbERQZCyI//SPcmaJ8Y356bPsbzqKkB29b5UqOOtsh6bBW224+nQAb5qoVRNBuSIHAzQ1+rpNkGglzTmy46Lm1es7VU/EDHpzprRCcqdPRI1PUoLn5iFzST5+wMOsXUXc/oYjcUI2Rzm11PMAx++RwNdK3kU+naOqIlXG+wc4afmJMfUq9lbCq1S9ic1yaHaYGuVbsvb0k9s6VZtr62VzsfbAk9s7SbHHzfqjFSFeGNlXwSGMbGyfdhnXeDkhXWph1KrSfPR+76kA9UImcYUoeIgJmfC3S83yuYOpalK6NZtlSpH/yRSVRBOePHhSmHRpx0nmIJswZh6TDO+8uSFda5PBiEAI//3x7+2mSalDBy8KBqhlSDdcqomDDd8AqIlZ+AB4g2Fxq9YaJ+h4UiuaJV+9DXBMOk99RD/wOM8dnLCQdNml3Qnr90kbIFFmLilI1U7pdgPVIL7GDIVDlTGHMg5jbrZx5t6By5p6ZeUmTh1mcke8oNIiLEFLMzBfRuaadkE5lvSs4f6FUybHFi5X6WY/0DLN4UPqFdNcsnIlA22eDpE8Ysd4gVf74hl/6nrhQSJGujK6q1bmtwkkXvIxrm6SfHd9//sESqdiaQxYs61cWVv7w2YYU1qyGzTeYxWPGq2EzbcQyIg74aJushr3j1bCDNzElPvkQnnhILoe8DX7HHCHp8GG27ZF+9uXniY/xju5eB5h18KxVVRecW4OwJuncWFORO26Hlm252mMVJ6oF+34h6cuX4tonXM5ec3L9t59D2m++DMKPU5H50cqkw8r0eaQ/w08/HnBl5f0T+CdNJyh0TeIKux+wuEFYl/RMePxDc7Rca1Qo5Ns91eHRZQ2svpwz2csX4kgvkfVPuLDsaTA1e28//fvvvw9PP/fCEy7AGcYS/w7RGgxJhwtGwhMuo8TjFKAO+QmXi2Gi8dI6qBu2cMkxLf97wHoLW3MoyfqVubpuV9YnXSnPXEYwttNdG8MxwyimJnqXAY+tanYcr9J+8DMOMD6c7IXADuzJSfSkujdIh2grS0nvrUK6iuzk80DTyGPvVqJxd+FbNTDO2blM7/bbO/zvHmWdWHPxXeeK2HCr6nblGaQr5awwI2KORTVAoiwKUMH1nFOrPwbiU6tvgbBNdVXSBbkw0VFlOFYvOqosOkrBccYck8ED/vnjgIXg6gdJa65owe8eEGJ90pXypY7AhzCAei4+LgHpQMTrWW+iuHkvYN17gkJ1xZVJh3Nh2yGd5RVYVvgz1vA0xNSKW3NX5Ne1jMRnkE48BydFO7Ial+L0w4YlnRxcOwFo9wVVsm1+VvdXJp0lhfd+0mV7MwirwloO3li4QVC0RefihXgW6Uq5NdajbyPAlLv9RbnCjZOuKB//Sb6ZwH+fTknEOtP2l5EOv1piO6Tfsw39P/orCT2yDHK95YYJkCK24ex1dLsSvF2KwFqPdEUpHKiOQ/4qmIqQaThoml/ydikTRBcgnTZ1U2+XogMVv13q7OEteZsYt+e8wd1E1LTFOpuJwgb1nBu0EKjNkg4/jtkFSTfgxs5C0s9+eiSbFtbxfiO/sBTCtc51ULG7tpzj23tZgl5nxfPpEeTb/RrSG+ZselBaFnOp5LIggMpa3jTxNtMiG+jCl5ye/fj77de9E3/v57svwgw7RpN2lgXKgynqHdqgB0v6qAc/ThZMRV0KWvcWbsTHJ3uPf33Hy5f+SnMMLMqEXU4a6ikaeD9fWkyderoMw7o3BjcflTGOVknFZwRIz7pgRKsO9Ow8gLCSZsXOMgtbCB8HbC5svPBZ7r8dn58/sn18wsKObCVz0ovEhvt/ajMkfjmcYU/Ue1Amn1+zXYuXv2LSyRnYwIZbW84lfmn8TXy2J/IeTGaofGAXiKQfKG1iw7V3OUCJFwdNDEd8krC6k5DeDHKpUs7/LMxTCpzzv/mliq6inEpe+7vD8UlsADwz7L+m4Vj/dWidktwBQoLXCEn8vuAVIP7dWfA6Dfx/eC1IGCG3vbvRSWwCTLl7e2+UM4/kCqMVX4Gk2/LPaf5peEtV+j8TEqbx/DexvFEV7+lWezcDk9gYgteqeHufyM93g9tJ/OqoaznisliJ3xNBKt3/Ogl+OZ6krjd7y99eIvGb4cbf898L/kCBxB+Kp5PB3Z/6N6ckBLi7l5RLSEhISEhISEhISEhISEhISEhISEhISEisif8BwcGjm9hbJ5EAAAAASUVORK5CYII=" alt="folhomee logo"/>
      </header>
      <Result/>
    </div>
  );
}
}

export default App;
