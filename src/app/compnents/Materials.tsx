"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

type Material = { id: number; title: string; image: string; printMethod: string; description: string; features: string[] }

const materials: Material[] = [
	{ 
		id: 1, 
		title: 'DTF Printing', 
		image: '/printmethods1.jpg',
		printMethod: 'DTF (Direct-to-Film)',
		description: 'Perfect for complex designs with unlimited colors',
		features: [
			'Photo-quality prints with fine details',
			'Works on any fabric type and color',
			'Cost-effective for small to medium runs'
			
		]
	},
	{ 
		id: 2, 
		title: 'Screen Printing', 
		image: '/WhatsApp Image 2025-11-17 at 11.50.45_9ac94bff.jpg',
		printMethod: 'Screen Printing',
		description: 'Industry standard for bulk orders and simple designs',
		features: [
			'Vibrant colors and sharp edges',
			'Most cost-effective for large quantities',
			'Excellent opacity on dark garments'
			
		]
	},
]

const MaterialCard: React.FC<{ material: Material }> = ({ material }) => {
	const [isHovered, setIsHovered] = useState(false)
	const [isMobileExpanded, setIsMobileExpanded] = useState(false)
	const [isClient, setIsClient] = useState(false)

	React.useEffect(() => {
		setIsClient(true)
	}, [])

	const handleMouseEnter = () => {
		if (!isClient) return
		if (window.innerWidth >= 769) {
			setIsHovered(true)
		}
	}

	const handleMouseLeave = () => {
		if (!isClient) return
		if (window.innerWidth >= 769) {
			setIsHovered(false)
		}
	}

	const handleMobileClick = () => {
		if (!isClient) return
		if (window.innerWidth < 769) {
			setIsMobileExpanded(!isMobileExpanded)
		}
	}

	const shouldShowExpanded = isClient && window.innerWidth >= 769 ? isHovered : isMobileExpanded

	return (
		<div
			className="relative group overflow-visible shadow-none bg-transparent rounded-2xl"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* Image area */}
			<div className="relative w-full aspect-square rounded-2xl overflow-visible">
				<div className="cut-right-rounded w-full h-full overflow-hidden">
					<Image
						src={material.image}
						alt={material.title}
						width={1200}
						height={1200}
						className={`object-cover w-full h-full transition-transform duration-300 ease-in-out ${isHovered ? 'scale-105' : 'scale-100'}`}
						style={material.id === 2 ? { objectPosition: 'center 5%' } : undefined}
						priority={false}
					/>
				</div>

				{/* Arrow anchored to the image's bottom-right edge and allowed to extend outside the mask */}
				<div className="absolute bottom-2 right-2 z-50 w-10 h-10 rounded-full bg-gray-400/50 backdrop-blur-md border border-white/30 flex items-center justify-center pointer-events-none translate-x-1/2 translate-y-1/2 max-[769px]:w-8 max-[769px]:h-8">
					<ArrowUpRight className="w-5 h-5 text-gray-900 max-[769px]:w-4 max-[769px]:h-4" />
				</div>
			</div>

			{/* Anchored info card */}
			<div className="absolute left-4 bottom-4 z-20 origin-bottom-left transition-all duration-300 ease-in-out transform scale-100">
				<div 
					className={`relative bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg shadow-md overflow-visible transition-all duration-300 cursor-pointer max-[769px]:cursor-pointer ${shouldShowExpanded ? 'pt-1 px-2 pb-2 rounded-lg shadow-xl border-white/40 w-[180px] max-[650px]:w-[160px] sm:w-[380px]' : 'px-2 py-1 w-auto'}`}
					onClick={handleMobileClick}
				>
					<div className={`text-sm font-semibold text-black transition-opacity duration-200 ${shouldShowExpanded ? 'hidden opacity-0 pointer-events-none' : 'block opacity-100'}`}>
						{material.printMethod}
					</div>

					<div className={`mt-0 text-black transition-opacity duration-300 ${shouldShowExpanded ? 'opacity-100 pointer-events-auto block max-h-[120px] max-[650px]:max-h-[100px] sm:max-h-[220px] overflow-auto' : 'opacity-0 pointer-events-none hidden'}`}>
						<div className="bg-transparent">
							<p className="font-bold text-lg max-[650px]:text-base mb-1">{material.printMethod}</p>
							<p className="text-sm max-[650px]:text-xs mb-2 text-gray-700">{material.description}</p>
							<ul className="text-sm max-[650px]:text-xs space-y-1 max-[650px]:space-y-0.5">
								{material.features.map((feature, index) => (
									<li key={index} className="flex items-center">
										<span className="text-green-500 mr-2 max-[650px]:mr-1">✓</span>
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function Materials() {
	return (
		<section className="bg-white py-12 relative">
			<div className="max-w-6xl mx-auto px-6 lg:px-12">
				<style jsx>{`
					/* Products header responsive styles (mobile-first) */
					.products-title {
						font-family: 'DM Sans', sans-serif;
						font-weight: 500;
						font-size: 20px; /* base for very small screens */
						line-height: 1;
						letter-spacing: 0;
						text-align: center;
						max-width: 300px;
						margin: 0 auto 1.75rem;
						color: #0B0014;
					}

					/* 375px and above */
					@media (min-width: 375px) {
						.products-title {
							font-size: 22px;
							max-width: 360px;
							margin-bottom: 2.25rem;
						}
					}

					/* 425px and above */
					@media (min-width: 425px) {
						.products-title {
							font-size: 28px;
							max-width: 420px;
							margin-bottom: 3rem;
						}
					}

					/* 769px and above (desktop/tablet) */
					@media (min-width: 769px) {
						.products-title {
							font-size: 36.65px; /* original desktop size */
							max-width: 500px;
							margin-bottom: 3rem;
						}
					}
				`}</style>

				<h2 className="products-title">Print Methods</h2>

				<div className="grid md:grid-cols-2 gap-8">
					{materials.map((m) => (
						<MaterialCard key={m.id} material={m} />
					))}
				</div>
			</div>


		</section>
	)
}
