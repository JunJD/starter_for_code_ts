import SidePane from '@/components/SidePane'
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Autocomplete, Box, Button, Chip, ChipDelete, Radio, RadioGroup, Slider, Typography, accordionDetailsClasses, accordionSummaryClasses } from '@mui/joy'

import { AddCircle } from '@mui/icons-material'
import { Outlet } from 'react-router-dom'



const Setting = () => {
	return (
		<>
			<SidePane>
				<Box
					sx={{
						p: 2,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography level="title-lg" textColor="text.secondary">
						助理
					</Typography>
					<Button startDecorator={<AddCircle />} size="sm">
						增加新的
					</Button>
				</Box>
				<Box
					sx={{
						p: 2,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography level="title-md">筛选</Typography>
					<Button size="sm" variant="plain">
						清理搜索项
					</Button>
				</Box>
				<AccordionGroup
					sx={{
						[`& .${accordionDetailsClasses.content}`]: {
							px: 2,
						},
						[`& .${accordionSummaryClasses.button}`]: {
							px: 2,
						},
					}}
				>
					<Accordion defaultExpanded>
						<AccordionSummary>
							<Typography level="title-sm">关键字搜索</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Box sx={{ my: 2 }}>
								<Autocomplete
									size="sm"
									placeholder="Position, skills, etc…"
									options={[
										{
											category: 'Position',
											title: 'Frontend engineer',
										},
										{
											category: 'Position',
											title: 'Backend engineer',
										},
										{
											category: 'Position',
											title: 'Product manager',
										},
										{
											category: 'Skill',
											title: 'JavaScript',
										},
										{
											category: 'Skill',
											title: 'TypeScript',
										},
										{
											category: 'Skill',
											title: 'Project management',
										},
									]}
									groupBy={(option) => option.category}
									getOptionLabel={(option) => option.title}
								/>
								<Box sx={{ my: 2, display: 'flex', gap: 1 }}>
									<Chip
										variant="soft"
										size="sm"
										endDecorator={<ChipDelete variant="soft" />}
									>
										UI designer
									</Chip>
								</Box>
							</Box>
						</AccordionDetails>
					</Accordion>
					<Accordion defaultExpanded>
						<AccordionSummary>
							<Typography level="title-sm">Location</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Box sx={{ my: 2 }}>
								<Autocomplete
									size="sm"
									placeholder="Country, city, etc…"
									options={[
										// some of Thailand provinces
										'Bangkok',
										'Amnat Charoen',
										'Ang Thong',
										'Bueng Kan',
										'Buriram',
										'Chachoengsao',
										'Chai Nat',
										'Chaiyaphum',
										'Chanthaburi',
										'Chiang Mai',
										'Chiang Rai',
										'Chonburi',
									]}
								/>
								<Box sx={{ mt: 3, display: 'flex', flexDirection: 'column' }}>
									<Typography level="title-sm">Range</Typography>
									<Slider
										size="sm"
										variant="solid"
										valueLabelFormat={(value) => `${value} km`}
										defaultValue={6}
										step={1}
										min={0}
										max={20}
										valueLabelDisplay="on"
									/>
								</Box>
							</Box>
						</AccordionDetails>
					</Accordion>
					<Accordion defaultExpanded>
						<AccordionSummary>
							<Typography level="title-sm">Education</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Box sx={{ my: 2 }}>
								<RadioGroup name="education" defaultValue="any">
									<Radio label="Any" value="any" size="sm" />
									<Radio label="High School" value="high-school" size="sm" />
									<Radio label="College" value="college" size="sm" />
									<Radio label="Post-graduate" value="post-graduate" size="sm" />
								</RadioGroup>
							</Box>
						</AccordionDetails>
					</Accordion>
					<Accordion defaultExpanded>
						<AccordionSummary>
							<Typography level="title-sm">Years of Experience</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Box sx={{ my: 2 }}>
								<Slider
									size="sm"
									valueLabelFormat={(value) => `${value} years`}
									defaultValue={[5, 10]}
									step={1}
									min={0}
									max={30}
									valueLabelDisplay="on"
								/>
							</Box>
						</AccordionDetails>
					</Accordion>
					<Accordion defaultExpanded>
						<AccordionSummary>
							<Typography level="title-sm">Languages Spoken</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Box sx={{ my: 2 }}>
								<Autocomplete
									size="sm"
									multiple
									placeholder="Select languages"
									options={[
										'English',
										'French',
										'German',
										'Portuguese',
										'Spanish',
									]}
									getOptionLabel={(option) => option}
									filterSelectedOptions
								/>
							</Box>
						</AccordionDetails>
					</Accordion>
				</AccordionGroup>
			</SidePane>
			<Outlet />
		</>
	)
}

export default Setting