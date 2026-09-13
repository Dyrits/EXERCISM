<?php

/*
 * By adding type hints and enabling strict type checking, code can become
 * easier to read, self-documenting and reduce the number of potential bugs.
 * By default, type declarations are non-strict, which means they will attempt
 * to change the original type to match the type specified by the
 * type-declaration.
 *
 * In other words, if you pass a string to a function requiring a float,
 * it will attempt to convert the string value to a float.
 *
 * To enable strict mode, a single declare directive must be placed at the top
 * of the file.
 * This means that the strictness of typing is configured on a per-file basis.
 * This directive not only affects the type declarations of parameters, but also
 * a function's return type.
 *
 * For more info review the Concept on strict type checking in the PHP track
 * <link>.
 *
 * To disable strict typing, comment out the directive below.
 */

declare(strict_types=1);

class SimpleCipher
{
    public string $key;
    public function __construct(string $key = null)
    {
        if ($key !== null && !preg_match('/^[a-z]+$/', $key)) {
            throw new InvalidArgumentException("The key is invalid.");
        }
        $this->key = $key ?? $this->generateKey();
    }

    public function encode(string $text): string
    {
        return implode("",
            array_map(fn($index, $letter) => chr((ord($letter) + ord($this->key[$index]) - 2 * ord("a")) % 26 + ord("a")),
                array_keys(str_split($text)),
                str_split($text)
            )
        );
    }

    public function decode(string $secret): string
    {
        return implode("",
            array_map(fn($index, $letter) => chr((ord($letter) - ord($this->key[$index]) + 26) % 26 + ord("a")),
                array_keys(str_split($secret)),
                str_split($secret)
            )
        );

    }

    private function generateKey(): string
    {
        return implode("", array_map(fn() => chr(rand(ord("a"), ord("z"))), range(1, 100)));
    }
}
