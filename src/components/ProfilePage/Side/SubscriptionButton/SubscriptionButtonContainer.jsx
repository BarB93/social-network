import React from 'react'
import { useSelector } from 'react-redux'

import SubscriptionButton from './SubscriptionButton'
import { useSubscription } from '../../../../hooks/useSubscription'

const SubscriptionButtonContainer = () => {
	const { userId } = useSelector((state) => state.profile.profile)
	const {
		isSubscribed,
		isErrorCheckSubscription,
		subscribe,
		isSubscribing,
		isErrorSubscribe,
		unsubscribe,
		isUnsubscribing,
		isErrorUnsubscribe,
	} = useSubscription(userId, true)

	if (isErrorCheckSubscription)
		return (
			<span>
				Произошла ошибка при проверки подписки y пользователя с id: {userId}
			</span>
		)
	if (isErrorSubscribe)
		return (
			<span>Произошла ошибка при подписке на пользователя с id: {userId}</span>
		)
	if (isErrorUnsubscribe)
		return (
			<span>Произошла ошибка при отписке от пользователя с id: {userId}</span>
		)
	return (
		<SubscriptionButton
			isSubscribed={isSubscribed}
			subscribe={subscribe}
			isSubscribing={isSubscribing}
			unsubscribe={unsubscribe}
			isUnsubscribing={isUnsubscribing}
		/>
	)
}

export default SubscriptionButtonContainer
