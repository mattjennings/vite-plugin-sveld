<script context="module">
  export const hello = "hello";
</script>

<script>
  /**
   * This is a comment.
   *
   * @required true
   */
  export let abc = true;
  let count = 0;
  const increment = () => {
    count += 1;
  };
  /**
   * @slot {Type} slot-name [slot description]
   */
  /**
   * @event {EventDetail} eventname [event description]
   */
  /**
   * Single element
   * @restProps {tagname}
   *
   * Multiple elements
   * @restProps {tagname-1 | tagname-2 | tagname-3}
   */

  /**
   * @custom
   */
</script>

<!-- @component
@example
<Button>
  Text
</Button>
-->

<button on:click={increment}>
  count is {count}
</button>
