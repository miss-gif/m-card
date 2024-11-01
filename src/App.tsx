import { css } from '@emotion/react'

const aa = css`
  color: red;
`

const App = () => {
  return (
    <div>
      <div>325232</div>
      <div css={aa}>325232</div>
    </div>
  )
}

export default App
