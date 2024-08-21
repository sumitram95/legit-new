<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use App\Models\NewsCategory;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class NewsCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $status = [
            "pilot",
            "development",
            "research",
            "whitepaper",
            "launched",
            "cancelled",
        ];


        foreach ($status as  $value) {
            NewsCategory::create([
                "id" => Str::uuid(),
                "name" => $value,
            ]);
        }
    }
}
