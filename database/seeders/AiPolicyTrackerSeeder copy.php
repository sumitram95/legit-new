<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AiPolicyTracker;
use App\Models\Country;
use App\Models\Status;

class AiPolicyTrackerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       // Truncate the table to remove all existing records
        // AiPolicyTracker::truncate();
        // Create an array of sample policies
        $policies = [
            [

                'ai_policy_name' => 'Act of AI Regulation',
                'governing_body' => 'Federal Trade Commission (FTC)',
                'announcement_year' => 2023,
                'whitepaper_document_link' => 'http://www.ftc.gov/ai-regulation',
                'technology_partners' => 'TechSafe Inc.',
                'governance_structure' => 'Federal AI Oversight Board',
                'main_motivation' => 'To enhance transparency and accountability in AI systems',
                'description' => 'The Act of AI Regulation aims to set standards for AI transparency, requiring companies to disclose the use of AI systems and ensure they adhere to ethical guidelines.',
            ],
            [

                'ai_policy_name' => 'AI Ethics Act',
                'governing_body' => 'European Commission',
                'announcement_year' => 2024,
                'whitepaper_document_link' => 'http://www.europa.eu/ai-ethics',
                'technology_partners' => 'EuroTech Solutions',
                'governance_structure' => 'EU AI Ethics Committee',
                'main_motivation' => 'To ensure AI technologies respect fundamental rights and freedoms',
                'description' => 'This policy aims to establish ethical guidelines for the development and deployment of AI technologies across the EU to protect citizens\' rights and prevent misuse.',
            ],
            [

                'ai_policy_name' => 'AI Surveillance Regulation',
                'governing_body' => 'State Council of China',
                'announcement_year' => 2022,
                'whitepaper_document_link' => 'http://www.china.gov.cn/ai-surveillance',
                'technology_partners' => 'ChinaTech Ltd.',
                'governance_structure' => 'National AI Surveillance Authority',
                'main_motivation' => 'To regulate the use of AI in surveillance and public security',
                'description' => 'This regulation focuses on the use of AI technologies for surveillance purposes, aiming to balance public security with individual privacy concerns.',
            ],
            [

                'ai_policy_name' => 'AI Innovation Act',
                'governing_body' => 'Ministry of Science and ICT',
                'announcement_year' => 2024,
                'whitepaper_document_link' => 'http://www.msit.go.kr/ai-innovation',
                'technology_partners' => 'K-Next Technologies',
                'governance_structure' => 'Korean AI Innovation Council',
                'main_motivation' => 'To foster innovation in AI technologies and support startups',
                'description' => 'The AI Innovation Act is designed to encourage the growth of AI technology startups by providing funding and support while ensuring innovation aligns with national interests.',
            ],
            [

                'ai_policy_name' => 'AI Accountability Framework',
                'governing_body' => 'Ministry of Electronics and IT',
                'announcement_year' => 2023,
                'whitepaper_document_link' => 'http://www.meit.gov.in/ai-accountability',
                'technology_partners' => 'IndoTech Innovations',
                'governance_structure' => 'AI Accountability Task Force',
                'main_motivation' => 'To ensure accountability and traceability in AI systems',
                'description' => 'This framework outlines requirements for AI systems to be accountable and traceable, focusing on ensuring that AI decisions are transparent and can be audited.',
            ],
            [

                'ai_policy_name' => 'AI Fairness Act',
                'governing_body' => 'Australian Government',
                'announcement_year' => 2024,
                'whitepaper_document_link' => 'http://www.australia.gov.au/ai-fairness',
                'technology_partners' => 'AussieAI Solutions',
                'governance_structure' => 'Australian AI Fairness Board',
                'main_motivation' => 'To promote fairness and equity in AI systems',
                'description' => 'The AI Fairness Act is aimed at ensuring that AI systems are developed and used in a manner that is fair and equitable, minimizing biases and discrimination.',
            ],
            [

                'ai_policy_name' => 'AI Safety Protocol',
                'governing_body' => 'Japanese Ministry of Internal Affairs and Communications',
                'announcement_year' => 2023,
                'whitepaper_document_link' => 'http://www.safety.japan.go.jp/ai-protocol',
                'technology_partners' => 'JapanTech Corp.',
                'governance_structure' => 'National AI Safety Council',
                'main_motivation' => 'To ensure the safe deployment of AI technologies',
                'description' => 'The AI Safety Protocol focuses on ensuring that AI technologies are deployed safely, minimizing risks and addressing potential hazards associated with their use.',
            ],
            [

                'ai_policy_name' => 'AI Transparency Act',
                'governing_body' => 'Canadian Government',
                'announcement_year' => 2024,
                'whitepaper_document_link' => 'http://www.canada.ca/ai-transparency',
                'technology_partners' => 'CanadaAI Innovations',
                'governance_structure' => 'Canadian AI Transparency Authority',
                'main_motivation' => 'To increase transparency in AI decision-making',
                'description' => 'This act is aimed at increasing transparency in AI decision-making processes, requiring organizations to provide clear explanations of AI-driven decisions.',
            ],
            [

                'ai_policy_name' => 'AI Ethics and Governance Framework',
                'governing_body' => 'Indian Ministry of IT',
                'announcement_year' => 2023,
                'whitepaper_document_link' => 'http://www.india.gov.in/ai-ethics',
                'technology_partners' => 'IndiaTech Solutions',
                'governance_structure' => 'Indian AI Ethics Committee',
                'main_motivation' => 'To establish ethical standards and governance in AI technologies',
                'description' => 'The AI Ethics and Governance Framework establishes ethical standards and governance structures for AI technologies to ensure they are used responsibly and in alignment with societal values.',
            ],
            [

                'ai_policy_name' => 'AI Impact Assessment Act',
                'governing_body' => 'Brazilian Ministry of Science and Technology',
                'announcement_year' => 2024,
                'whitepaper_document_link' => 'http://www.brazil.gov.br/ai-impact-assessment',
                'technology_partners' => 'BrazilAI Corp.',
                'governance_structure' => 'Brazilian AI Impact Assessment Board',
                'main_motivation' => 'To assess and mitigate the impact of AI technologies',
                'description' => 'The AI Impact Assessment Act focuses on assessing and mitigating the impact of AI technologies, ensuring they do not adversely affect society or the environment.',
            ],
        ];

        foreach ($policies as $policy) {
            $country = Country::inRandomOrder()->first();
            $status = Status::inRandomOrder()->first();
            AiPolicyTracker::create(array_merge(
                $policy,
                [
                    'country_id' => $country->id,
                    'status_id' => $status->id,
                    ]
            ));
        }
    }
}
