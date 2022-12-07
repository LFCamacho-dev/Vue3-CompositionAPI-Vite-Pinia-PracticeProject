
import { watch, computed, onMounted, reactive} from 'vue'


const counterData = reactive({
    count: 0,
    title: "My counter"
})
export function useCounter(){

	watch(() => counterData.count, (newCount, oldCount) => {
		if(newCount === 20) {
			alert('You reached 20')
		}
	})

	const oddOrEven = computed(() => {
		if(counterData.count % 2 === 0) return 'even'
		return 'odd'
	})

	const increaseCounter = (amount, e) => {
		counterData.count += amount;

	};

	const decreaseCounter = (amount) => {
	    counterData.count -= amount;
	};

    return {
       counterData, oddOrEven, increaseCounter, decreaseCounter
    }

}