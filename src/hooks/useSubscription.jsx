import { userService } from '../api/services/userService'

export const useSubscription = (userId, isFetchSubscription = false) => {
	const {
		data: isSubscribed,
		isFetching: isFetchingCheckSubscription,
		isError: isErrorCheckSubscription,
	} = isFetchSubscription
		? userService.useFetchCheckSubscriptionQuery(userId)
		: {}
	const [
		subscribe,
		{ isLoading: isLoadingSubscribe, isError: isErrorSubscribe },
	] = userService.useSubscribeOnUserMutation()
	const [
		unsubscribe,
		{ isLoading: isLoadingUnsubscribe, isError: isErrorUnsubscribe },
	] = userService.useUnsubscribeFromUserMutation()

	const handleSubscribe = () => {
		subscribe(userId)
	}
	const handleUnsubscribe = () => {
		unsubscribe(userId)
	}

	const isSubscribing = isFetchSubscription
		? isLoadingSubscribe || isFetchingCheckSubscription
		: isLoadingSubscribe
	const isUnsubscribing = isFetchSubscription
		? isLoadingUnsubscribe || isFetchingCheckSubscription
		: isLoadingUnsubscribe

	const result = {
		subscribe: handleSubscribe,
		isSubscribing,
		isErrorSubscribe,
		unsubscribe: handleUnsubscribe,
		isUnsubscribing,
		isErrorUnsubscribe,
	}
	if (isFetchSubscription) {
		result.isSubscribed = isSubscribed
		result.isFetchingCheckSubscription = isFetchingCheckSubscription
		result.isErrorCheckSubscription = isErrorCheckSubscription
	}

	return result
}
