export default function _authAnonymously(fn, auth){
  return auth.signInAnonymously().then(authData => {
    return fn(null, authData);
  }).catch(err => {
    return fn(err);
  });
}
