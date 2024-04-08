import {defineStore} from "pinia";
import {ref, computed} from "vue";


export const useBMIStore = defineStore('bmi', () => {
    const height = ref(0);
    const weight = ref(0);

    // the units that the calculatedBMI will return in. Should be either 'metric' or 'american'
    const units = ref('metric')
    const calculatedBMI = computed(() => {
        let w = weight.value;
        let h = height.value;
        switch (units.value) {
            case 'metric':
                return (w / ( h * h )).toFixed(2);
            case 'american':
                return (w / ( h * h ) * 703).toFixed(2);
        }
    })
    return{
        height,
        weight,
        units,
        calculatedBMI
    }
})
