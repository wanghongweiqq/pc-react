

import  { useEffect } from 'react';
export default (props) =>{
  useEffect( () => {
    console.log('this.props')
    console.log(props.location)

  }, [props]);


  return (
    <p>
      22222222222222222222
    </p>
  );
}

