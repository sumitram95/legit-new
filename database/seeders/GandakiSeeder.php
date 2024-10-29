<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class GandakiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $districts = [
            // Districts of Gandaki Province in ascending order of label
            [
                "id" => Str::uuid(),
                "name_en" => "Gorkha",
                "name_np" => "गोरखा",
                "province_label" => "p4",
                "label" => "dis36"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lamjung",
                "name_np" => "लमजुङ",
                "province_label" => "p4",
                "label" => "dis37"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tanahun",
                "name_np" => "तनहुँ",
                "province_label" => "p4",
                "label" => "dis38"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Syangja",
                "name_np" => "स्याङ्जा",
                "province_label" => "p4",
                "label" => "dis39"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kaski",
                "name_np" => "कास्की",
                "province_label" => "p4",
                "label" => "dis40"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Manang",
                "name_np" => "मनाङ",
                "province_label" => "p4",
                "label" => "dis41"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mustang",
                "name_np" => "मुस्ताङ",
                "province_label" => "p4",
                "label" => "dis42"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Myagdi",
                "name_np" => "म्याग्दी",
                "province_label" => "p4",
                "label" => "dis43"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Parbat",
                "name_np" => "पर्वत",
                "province_label" => "p4",
                "label" => "dis44"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Baglung",
                "name_np" => "बागलुङ",
                "province_label" => "p4",
                "label" => "dis45"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nawalparasi (East)",
                "name_np" => "नवलपरासी (पूर्व)",
                "province_label" => "p4",
                "label" => "dis46"
            ],
        ];

        DB::table('districts')->insert($districts);
    }
}
