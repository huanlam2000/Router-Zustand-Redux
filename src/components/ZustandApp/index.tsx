import Column from './components/Column/index';
function ZustandApp() {
  return (
    <>
      <Column state='PLANNED' />
      <Column state='ONGOING' />
      <Column state='DONE' />
    </>
  )
}

export default ZustandApp
