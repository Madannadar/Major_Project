import React, { useState } from 'react'
import {
    Search,
    Filter,
    Calendar,
    DollarSign,
    Clock,
    FileText,
    Eye,
    Download,
    CheckCircle,
    XCircle,
    AlertCircle,
    Phone,
    Mail,
    MessageCircle,
    HelpCircle,
    ChevronRight,
    MapPin,
    Building,
} from 'lucide-react'
// Active Tenders Page
export function ActiveTenders() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const tenders = [
        {
            id: 'T001',
            title: 'Road Construction Project - Highway 101',
            category: 'Infrastructure',
            budget: '$2.5M',
            deadline: '2024-02-15',
            location: 'San Francisco, CA',
            description:
                'Complete reconstruction of 5-mile highway section including drainage systems.',
            requirements: [
                'Licensed Contractor',
                'Previous Highway Experience',
                'Equipment Available',
            ],
            publishedDate: '2024-01-10',
            bidsCount: 12,
        },
        {
            id: 'T002',
            title: 'IT Equipment Procurement',
            category: 'Technology',
            budget: '$850K',
            deadline: '2024-02-20',
            location: 'Remote/Multiple Locations',
            description:
                'Supply of laptops, servers, and networking equipment for government offices.',
            requirements: [
                'Certified Vendor',
                'Warranty Support',
                'Installation Service',
            ],
            publishedDate: '2024-01-12',
            bidsCount: 8,
        },
        {
            id: 'T003',
            title: 'Healthcare Supplies Contract',
            category: 'Healthcare',
            budget: '$1.2M',
            deadline: '2024-02-25',
            location: 'Los Angeles, CA',
            description:
                'Annual supply contract for medical equipment and consumables.',
            requirements: [
                'FDA Approved Products',
                'Distribution Network',
                'Quality Certifications',
            ],
            publishedDate: '2024-01-15',
            bidsCount: 15,
        },
    ]
    const categories = [
        'all',
        'Infrastructure',
        'Technology',
        'Healthcare',
        'Education',
    ]
    const filteredTenders = tenders.filter((tender) => {
        const matchesSearch = tender.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        const matchesCategory =
            selectedCategory === 'all' || tender.category === selectedCategory
        return matchesSearch && matchesCategory
    })
    return (
        <div
            className="p-6"
            style={{
                fontFamily: 'Poppins, sans-serif',
            }}
        >
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-black mb-2">Active Tenders</h1>
                <p className="text-gray-600">
                    Browse and bid on available procurement opportunities
                </p>
            </div>
            {/* Search and Filter */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search tenders..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category === 'all' ? 'All Categories' : category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {/* Tenders List */}
            <div className="space-y-4">
                {filteredTenders.map((tender) => (
                    <div
                        key={tender.id}
                        className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-black mb-2">
                                    {tender.title}
                                </h3>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                                    <span className="flex items-center">
                                        <Building className="h-4 w-4 mr-1" />
                                        {tender.category}
                                    </span>
                                    <span className="flex items-center">
                                        <DollarSign className="h-4 w-4 mr-1" />
                                        {tender.budget}
                                    </span>
                                    <span className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {tender.location}
                                    </span>
                                    <span className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        Due: {tender.deadline}
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                    {tender.bidsCount} bids
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">{tender.description}</p>
                        <div className="mb-4">
                            <h4 className="font-medium text-black mb-2">Requirements:</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                {tender.requirements.map((req, index) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">
                                Published: {tender.publishedDate}
                            </span>
                            <div className="space-x-3">
                                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                                    <Eye className="h-4 w-4 inline mr-2" />
                                    View Details
                                </button>
                                <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                                    Submit Bid
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
// My Bids Page
export function MyBids() {
    const bids = [
        {
            id: 'B001',
            tenderId: 'T001',
            tenderTitle: 'Road Construction Project - Highway 101',
            bidAmount: '$2.3M',
            submittedDate: '2024-01-20',
            status: 'Under Review',
            deadline: '2024-02-15',
            ranking: 3,
            totalBids: 12,
        },
        {
            id: 'B002',
            tenderId: 'T005',
            tenderTitle: 'School Building Renovation',
            bidAmount: '$1.8M',
            submittedDate: '2024-01-18',
            status: 'Shortlisted',
            deadline: '2024-02-10',
            ranking: 2,
            totalBids: 8,
        },
        {
            id: 'B003',
            tenderId: 'T003',
            tenderTitle: 'Office Furniture Supply',
            bidAmount: '$450K',
            submittedDate: '2024-01-15',
            status: 'Rejected',
            deadline: '2024-02-05',
            ranking: 5,
            totalBids: 10,
        },
        {
            id: 'B004',
            tenderId: 'T007',
            tenderTitle: 'IT Infrastructure Upgrade',
            bidAmount: '$920K',
            submittedDate: '2024-01-22',
            status: 'Won',
            deadline: '2024-02-18',
            ranking: 1,
            totalBids: 6,
        },
    ]
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Won':
                return 'bg-green-100 text-green-700 border-green-200'
            case 'Shortlisted':
                return 'bg-blue-100 text-blue-700 border-blue-200'
            case 'Under Review':
                return 'bg-yellow-100 text-yellow-700 border-yellow-200'
            case 'Rejected':
                return 'bg-red-100 text-red-700 border-red-200'
            default:
                return 'bg-gray-100 text-gray-700 border-gray-200'
        }
    }
    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Won':
                return <CheckCircle className="h-4 w-4" />
            case 'Rejected':
                return <XCircle className="h-4 w-4" />
            default:
                return <Clock className="h-4 w-4" />
        }
    }
    return (
        <div
            className="p-6"
            style={{
                fontFamily: 'Poppins, sans-serif',
            }}
        >
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-black mb-2">My Bids</h1>
                <p className="text-gray-600">Track the status of your submitted bids</p>
            </div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="text-2xl font-bold text-black">8</div>
                    <div className="text-sm text-gray-600">Total Bids</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="text-2xl font-bold text-green-600">3</div>
                    <div className="text-sm text-gray-600">Won</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="text-2xl font-bold text-yellow-600">2</div>
                    <div className="text-sm text-gray-600">Under Review</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="text-2xl font-bold text-blue-600">2</div>
                    <div className="text-sm text-gray-600">Shortlisted</div>
                </div>
            </div>
            {/* Bids List */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tender
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Bid Amount
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Ranking
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Submitted
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {bids.map((bid) => (
                                <tr key={bid.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div>
                                            <div className="text-sm font-medium text-black">
                                                {bid.tenderTitle}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                ID: {bid.tenderId}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-black font-medium">
                                        {bid.bidAmount}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(bid.status)}`}
                                        >
                                            {getStatusIcon(bid.status)}
                                            <span className="ml-1">{bid.status}</span>
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {bid.ranking} of {bid.totalBids}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {bid.submittedDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-black hover:text-gray-700">
                                            <Eye className="h-4 w-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
// Contracts Page
export function Contracts() {
    const contracts = [
        {
            id: 'C001',
            title: 'IT Infrastructure Upgrade',
            contractValue: '$920K',
            startDate: '2024-03-01',
            endDate: '2024-08-31',
            status: 'Active',
            progress: 35,
            client: 'Department of Technology',
            paymentStatus: 'Up to date',
            nextMilestone: 'Phase 2 Completion',
            milestoneDate: '2024-04-15',
        },
        {
            id: 'C002',
            title: 'Office Building Maintenance',
            contractValue: '$1.2M',
            startDate: '2024-01-15',
            endDate: '2024-12-31',
            status: 'Active',
            progress: 25,
            client: 'General Services Administration',
            paymentStatus: 'Pending Review',
            nextMilestone: 'Quarterly Inspection',
            milestoneDate: '2024-04-01',
        },
        {
            id: 'C003',
            title: 'School Renovation Project',
            contractValue: '$1.8M',
            startDate: '2023-09-01',
            endDate: '2024-02-28',
            status: 'Completed',
            progress: 100,
            client: 'Board of Education',
            paymentStatus: 'Completed',
            nextMilestone: 'Final Inspection',
            milestoneDate: '2024-03-01',
        },
    ]
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-green-100 text-green-700'
            case 'Completed':
                return 'bg-blue-100 text-blue-700'
            case 'Pending':
                return 'bg-yellow-100 text-yellow-700'
            default:
                return 'bg-gray-100 text-gray-700'
        }
    }
    return (
        <div
            className="p-6"
            style={{
                fontFamily: 'Poppins, sans-serif',
            }}
        >
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-black mb-2">Contracts</h1>
                <p className="text-gray-600">
                    Manage your active and completed contracts
                </p>
            </div>
            {/* Contract Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="text-2xl font-bold text-black">$3.94M</div>
                    <div className="text-sm text-gray-600">Total Contract Value</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="text-2xl font-bold text-green-600">2</div>
                    <div className="text-sm text-gray-600">Active Contracts</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="text-2xl font-bold text-blue-600">1</div>
                    <div className="text-sm text-gray-600">Completed This Year</div>
                </div>
            </div>
            {/* Contracts List */}
            <div className="space-y-6">
                {contracts.map((contract) => (
                    <div
                        key={contract.id}
                        className="bg-white rounded-lg border border-gray-200 p-6"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-2">
                                    {contract.title}
                                </h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    <span>Contract ID: {contract.id}</span>
                                    <span>Client: {contract.client}</span>
                                </div>
                            </div>
                            <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(contract.status)}`}
                            >
                                {contract.status}
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            <div>
                                <div className="text-sm text-gray-500">Contract Value</div>
                                <div className="font-semibold text-black">
                                    {contract.contractValue}
                                </div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Duration</div>
                                <div className="font-semibold text-black">
                                    {contract.startDate} - {contract.endDate}
                                </div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Payment Status</div>
                                <div className="font-semibold text-black">
                                    {contract.paymentStatus}
                                </div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Next Milestone</div>
                                <div className="font-semibold text-black">
                                    {contract.nextMilestone}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {contract.milestoneDate}
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Progress</span>
                                <span className="text-sm font-medium text-black">
                                    {contract.progress}%
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-black h-2 rounded-full transition-all duration-300"
                                    style={{
                                        width: `${contract.progress}%`,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                                <FileText className="h-4 w-4 inline mr-2" />
                                View Contract
                            </button>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                                <Download className="h-4 w-4 inline mr-2" />
                                Download Documents
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
// Support Page
export function Support() {
    const [selectedFaq, setSelectedFaq] = useState<number | null>(null)
    const faqs = [
        {
            question: 'How do I submit a bid?',
            answer:
                "To submit a bid, navigate to the Active Tenders page, select the tender you're interested in, and click 'Submit Bid'. You'll need to provide your bid amount, technical proposal, and required documents.",
        },
        {
            question: 'What documents are required for bidding?',
            answer:
                'Required documents typically include: business license, tax certificates, technical qualifications, financial statements, and project references. Specific requirements are listed in each tender.',
        },
        {
            question: 'How can I track my bid status?',
            answer:
                "You can track all your bids in the 'My Bids' section. The system will show real-time updates on evaluation progress, ranking, and final results.",
        },
        {
            question: 'When will I receive payment?',
            answer:
                'Payment terms are specified in each contract. Typically, payments are processed within 30 days of milestone completion and invoice approval.',
        },
        {
            question: 'How do I update my vendor profile?',
            answer:
                "Click on your profile icon in the top navigation and select 'Profile Settings'. You can update your company information, certifications, and contact details.",
        },
    ]
    return (
        <div
            className="p-6"
            style={{
                fontFamily: 'Poppins, sans-serif',
            }}
        >
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-black mb-2">Support Center</h1>
                <p className="text-gray-600">
                    Get help with your procurement activities
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Contact Information */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                        <h3 className="text-lg font-semibold text-black mb-4">
                            Contact Us
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <Phone className="h-5 w-5 text-gray-700" />
                                </div>
                                <div>
                                    <div className="font-medium text-black">Phone Support</div>
                                    <div className="text-sm text-gray-600">1-800-PROCURE</div>
                                    <div className="text-sm text-gray-500">
                                        Mon-Fri 9AM-5PM PST
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <Mail className="h-5 w-5 text-gray-700" />
                                </div>
                                <div>
                                    <div className="font-medium text-black">Email Support</div>
                                    <div className="text-sm text-gray-600">
                                        vendor@procurewatch.gov
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Response within 24 hours
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <MessageCircle className="h-5 w-5 text-gray-700" />
                                </div>
                                <div>
                                    <div className="font-medium text-black">Live Chat</div>
                                    <div className="text-sm text-gray-600">Available now</div>
                                    <button className="text-sm text-black hover:underline">
                                        Start Chat
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-black mb-4">
                            Quick Links
                        </h3>
                        <div className="space-y-2">
                            <a
                                href="#"
                                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                            >
                                <span className="text-gray-700">Vendor Guidelines</span>
                                <ChevronRight className="h-4 w-4 text-gray-400" />
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                            >
                                <span className="text-gray-700">Bidding Tutorial</span>
                                <ChevronRight className="h-4 w-4 text-gray-400" />
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                            >
                                <span className="text-gray-700">Contract Templates</span>
                                <ChevronRight className="h-4 w-4 text-gray-400" />
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                            >
                                <span className="text-gray-700">Payment Information</span>
                                <ChevronRight className="h-4 w-4 text-gray-400" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* FAQ Section */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-black mb-6">
                            Frequently Asked Questions
                        </h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg">
                                    <button
                                        onClick={() =>
                                            setSelectedFaq(selectedFaq === index ? null : index)
                                        }
                                        className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 rounded-lg"
                                    >
                                        <span className="font-medium text-black">
                                            {faq.question}
                                        </span>
                                        <HelpCircle
                                            className={`h-5 w-5 text-gray-400 transform transition-transform ${selectedFaq === index ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {selectedFaq === index && (
                                        <div className="px-4 pb-3 text-gray-600">{faq.answer}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Submit Ticket */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
                        <h3 className="text-lg font-semibold text-black mb-4">
                            Submit Support Ticket
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Brief description of your issue"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category
                                </label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
                                    <option>Bidding Issues</option>
                                    <option>Payment Questions</option>
                                    <option>Technical Problems</option>
                                    <option>Account Management</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Provide detailed information about your issue"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                            >
                                Submit Ticket
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
