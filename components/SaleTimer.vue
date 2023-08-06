<template>
    <div>
        Sale expires at {{ saleExpiration }}
    </div>
</template>

<script setup>

    const emit = defineEmits(['expiredNa'])

    const { category } = defineProps(
        {
            category: {
                type: String,
                required: true
            },
            otherPro: {
                type: Number,
            }
        }
    )

    const saleExpiration = ref('Timer...')

    const dueDate = new Date('2023-08-06T14:12:00'); // Replace with your due date

    const timer = setInterval(() => {
        saleExpiration.value = formatDueDate(dueDate, new Date())
        
        if (dueDate <= new Date()) {
            emit('expiredNa', true)
            clearInterval(timer)
        }
        
        // console.log(new Date())
    }, 1000)

    onBeforeUnmount(() => {
        clearInterval(timer)
    })  

    function formatDueDate(dueDate, currentDate) {
        // Calculate the difference in milliseconds between the due date and the current date
        const timeDifference = dueDate.getTime() - currentDate.getTime();

        // Calculate the hours, minutes, and seconds from the time difference
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Add leading zero to the values if they are less than 10
        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        // Format the result as HH:MM:SS
        const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        return formattedTime;
        }


</script>