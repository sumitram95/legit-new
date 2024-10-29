<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class MadheshSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $districts = [
            [
                "id" => Str::uuid(),
                "name_en" => "Saptari",
                "name_np" => "सप्तरी",
                "province_label" => "p2",
                "label" => "dis15"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Siraha",
                "name_np" => "सिराहा",
                "province_label" => "p2",
                "label" => "dis16"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhanusha",
                "name_np" => "धनुषा",
                "province_label" => "p2",
                "label" => "dis17"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahottari",
                "name_np" => "महोत्तरी",
                "province_label" => "p2",
                "label" => "dis18"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sarlahi",
                "name_np" => "सर्लाही",
                "province_label" => "p2",
                "label" => "dis19"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rautahat",
                "name_np" => "रौतहट",
                "province_label" => "p2",
                "label" => "dis20"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bara",
                "name_np" => "बारा",
                "province_label" => "p2",
                "label" => "dis21"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Parsa",
                "name_np" => "पर्सा",
                "province_label" => "p2",
                "label" => "dis22"
            ],
        ];

        DB::table('districts')->insert($districts);
    }
}
