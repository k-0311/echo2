### [19.删除链表的倒数第N个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

```javascript
const removeSomeNode = (link, n) => {
    let prev = { cid: '哨兵节点' }
    prev.next = link

    let fast = prev
    let slow = prev

    while (n--) {
        if (!fast) return null
        fast = fast.next
    }

    while (fast?.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return prev.next
}
```



### [21.合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

```javascript
const margeTwoLink = (link1, link2) => {
    if (!link1) return link2
    if (!link2) return link1

    const head = { cid: '哨兵节点' }
    let prev = head
    while (link1 && link2) {
        if (link1.cid > link2.cid) {
            prev.next = link2
            link2 = link2.next
        } else {
            prev.next = link1
            link1 = link1.next
        }
        prev = prev.next
    }
    prev.next = link1 || link2
    return head.next
}
```

### [141.环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

```javascript
const isCycleLink = head => {
    if (!head || !head.next) return false
    let fast = head.next
    let slow = head
    while (fast?.cid !== slow.cid) {
        if (!fast || !fast.next) return false
        fast = fast.next.next
        slow = slow.next
    }
    return true
}
```

### [160.相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)

```javascript
const intersectionLink = (link1, link2) => {
    if (!link1 && !link2) return null
    let pa = link1
    let pb = link2
    while (pa || pb) {
        if (pa.cid === pb.cid) return pa
        if (!pa.next && !pb.next) return null //pa、pb同时为 null 代表抹平长度差后的链表没有交点
        pa = pa.next === null ? link2 : pa.next
        pb = pb.next === null ? link1 : pb.next
    }
}
```



### [206.反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

```javascript
const reverseLink = link => {
    let prev = null
    let curr = link
    while (curr !== null) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}
```

### [876.链表的中间节点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)

```javascript
const middleNode = link => {
    let fast = link
    let slow = link
    while (fast?.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}
```

