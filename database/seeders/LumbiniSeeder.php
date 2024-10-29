<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class LumbiniSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $districts = [
            // Districts of Lumbini Province
            [
                "id" => Str::uuid(),
                "name_en" => "Rukum East",
                "name_np" => "रुकुम (पूर्वी भाग)",
                "province_label" => "p5",
                "label" => "dis47",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gulmi",
                "name_np" => "गुल्मी",
                "province_label" => "p5",
                "label" => "dis48",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Palpa",
                "name_np" => "पाल्पा",
                "province_label" => "p5",
                "label" => "dis49",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rupandehi",
                "name_np" => "रुपन्देही",
                "province_label" => "p5",
                "label" => "dis50",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kapilvastu",
                "name_np" => "कपिलवस्तु",
                "province_label" => "p5",
                "label" => "dis51",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Arghakhanchi",
                "name_np" => "अर्घाखाँची",
                "province_label" => "p5",
                "label" => "dis52",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pyuthan",
                "name_np" => "प्यूठान",
                "province_label" => "p5",
                "label" => "dis53",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rolpa",
                "name_np" => "रोल्पा",
                "province_label" => "p5",
                "label" => "dis54",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dang",
                "name_np" => "दाङ",
                "province_label" => "p5",
                "label" => "dis55",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Banke",
                "name_np" => "बाँके",
                "province_label" => "p5",
                "label" => "dis56",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bardiya",
                "name_np" => "बर्दिया",
                "province_label" => "p5",
                "label" => "dis57",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Salyan",
                "name_np" => "सल्यान",
                "province_label" => "p5",
                "label" => "dis58",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nawalparasi",
                "name_np" => "नवलपरासी (पश्विम)",
                "province_label" => "p5",
                "label" => "dis76",
            ],
        ];

        DB::table('districts')->insert($districts);
    }
}
