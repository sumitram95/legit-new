<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $status =[
            "cancelled",
            "research",
            "whitepaper",
            "pilot",
            "development",
            "launched",
        ];


        foreach ($status as  $value) {
            Status::create([
                "id"=>Str::uuid(),
                "name"=>$value,
            ]);
        }
    }
}