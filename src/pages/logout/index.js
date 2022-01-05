

function LogOut () {


    sessionStorage.removeItem('token');
    window.location.replace("/");


  return (
    <>
    </>
  );
}

export default LogOut;
