import { reactive, ref } from 'vue'
import { disasters } from './data/disasters.js'

export const selectedDisaster = ref(disasters[0])
export const mapRef = ref(null)

export function selectDisaster(d) {
  selectedDisaster.value = d
}
