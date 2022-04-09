import SocialLink from '../SocialLink/SocialLink'

import './contacts.scss'

export const Contacts = ({contacts}) => {
    return (
        <div className='contacts-wrap'>
            {contacts && contacts.map(contact => <SocialLink key={contacts.id} {...contact}/>)}
        </div>
    )
} 
