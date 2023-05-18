import { useSelector } from 'react-redux';

function Users() {
  const { users,isLoading,error } = useSelector((state) => state.users);
	
}

export default Users;