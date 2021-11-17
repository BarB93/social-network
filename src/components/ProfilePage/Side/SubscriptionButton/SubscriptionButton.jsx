import React from 'react'
import Button from '../../../UI/Button/Button'
import ItemsLoader from '../../../UI/Loader/ItemsLoader/ItemsLoader'

const SubscriptionButton = ({
	isSubscribed,
	subscribe,
	isSubscribing,
	unsubscribe,
	isUnsubscribing,
}) => {
	if (isSubscribed === undefined) return null
	return isSubscribed ? (
		<Button disabled={isUnsubscribing} onClick={unsubscribe} secondary>
			{isUnsubscribing ? <ItemsLoader dots /> : 'Удалить из друзей'}
		</Button>
	) : (
		<Button disabled={isSubscribing} onClick={subscribe}>
			{isSubscribing ? <ItemsLoader dots /> : 'Добавить в друзья'}
		</Button>
	)
}

export default SubscriptionButton
