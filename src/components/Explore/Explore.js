import { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import ExploreItem from '../ExploreItem/ExploreItem'
import './Explore.css'

function Explore() {
	const { currentUser } = useSelector(selectUsers)

  return (
	 <div className='container Explore'>
		<div className='gallery'>
			{
				currentUser?.posts.map(el => <ExploreItem key={el.id} img={el.img} likes={el.likes} commentsCount={el.commentsCount} />)
			}
		</div>
	 </div>
  )
}

export default memo(Explore)
