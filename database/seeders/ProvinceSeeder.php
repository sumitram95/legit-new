<?php

namespace Database\Seeders;

use App\Models\Province;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $provinces = [
            [
                "id" => Str::uuid(),
                "name_en" => "Koshi",
                "name_np" => "कोशी",
                "label" => "p1",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Madhesh",
                "name_np" => "मधेश",
                "label" => "p2",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bagmati",
                "name_np" => "बागमती",
                "label" => "p3",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gandaki",
                "name_np" => "गण्डकी",
                "label" => "p4"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lumbini",
                "name_np" => "लुम्बिनी",
                "label" => "p5",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Karnali",
                "name_np" => "कर्णाली",
                "label" => "p6",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sudurpashchim",
                "name_np" => "सुदूरपश्चिम",
                "label" => "p7",
            ],
        ];

        DB::table('provinces')->insert($provinces);
    }
}
