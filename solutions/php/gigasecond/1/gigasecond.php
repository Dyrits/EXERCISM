<?php

function from($date)
{
    $updated = clone $date;
    return $updated->add(new DateInterval("PT1000000000S"));
}
