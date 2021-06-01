### [leetcode1：两数之和 (简单)](https://leetcode-cn.com/problems/two-sum/)

```javascript
const twoNumSum = (nums, targe) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let k = targe - nums[i]
        if (map.has(k)) {
            return [map.get(k), i]
        }
        map.set(nums[i], i)
    }
    return []
}
```

### [leetcode15：三数之和(中等)](https://leetcode-cn.com/problems/3sum/)

```javascript
const threeNumSum = nums => {
    let len = nums.length
    let result = []
    //因为是三数之和，小于三个不用考虑了
    if (len < 3) return result
    nums.sort((a, b) => a - b) //从小到大排序
    // len - 2 同样道理，小于三个不用考虑
    for (let i = 0; i < nums.length - 2; i++) {
        // 如果第一个就大于0了，三个加起来肯定大于0
        if (nums[i] > 0) break
        // 避免掉重复的情况
        if (i && nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = len - 1
        // 双指针夹逼
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                result.push([nums[i] + nums[left] + nums[right]])
                // push 加了之后防止还存在重复
                while (nums[left] === nums[left - 1]) left++
                while (nums[right] === nums[right + 1]) right--
            } else if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            }
        }
    }
    return result
}
```

### [leetcode88：[合并两个有序数组(简单)](https://leetcode-cn.com/problems/merge-sorted-array/)

```javascript
const twoNumConcat = (nums1, m, nums2, n) => {
    let len1 = m - 1
    let len2 = n - 1
    let len = m + n - 1
    while (len2 >= 0) {
        if (len1 < 0) {
            nums1[len--] = nums2[len2--]
            continue
        }
        nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]
    }
    console.log(nums1)
    return nums1
}
```

### [leetcode146：LRU 缓存机制(中等)](https://leetcode-cn.com/problems/lru-cache/)

```javascript
class LRU {
    constructor({ max = 3 }) {
        this.max = max
        this.cache = new Map()
    }
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size >= this.max) {
            this.cache.delete(this.cache.keys().next().value)
        }
        this.cache.set(key, value)
    }
    get(key) {
        if (!this.cache.has(key)) return -1
        const value = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, value)
        return value
    }
}
```

### [leetcode349：两个数组的交集(简单)](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

```javascript
const intersection = (nums1, nums2) => {
    // return [...new Set(nums1.filter(item => nums2.includes(item)))]
    const map = new Map()
    const list = []
    nums1.forEach(v1 => map.set(v1, v1))
    nums2.forEach(v2 => {
        if (map.has(v2)) list.push(v2)
    })
    return [...new Set(list)]
}
```

### [leetcode611：有效三角形的个数(中等)](https://leetcode-cn.com/problems/valid-triangle-number/)

```javascript
const triangleNumber = nums => {
    if (!nums || nums.length < 3) return 0
    let count = 0
    nums.sort((a, b) => a - b)
    for (let k = nums.length - 1; k > 1; k--) {
        let i = 0
        let j = k - 1
        while (i < j) {
            if (nums[i] + nums[j] > nums[k]) {
                count += j - i //nums[i] + nums[j] 满足条件，因此 i -> j-1 都能构成三角形，且不会重复
                j--
            } else {
                i++
            }
        }
    }
}
```
