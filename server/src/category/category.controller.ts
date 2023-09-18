import {
	Controller,
	Post,
	Body,
	UseGuards,
	Req,
	Get,
	UsePipes,
	ValidationPipe,
	Param,
	Patch,
	Delete,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { authorGuard } from 'src/guard/author-guard.guard'

@Controller('categories')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Post()
	@UseGuards(JwtAuthGuard)
	@UsePipes(new ValidationPipe())
	//В реквесте - будет юзер
	create(@Body() createCategoryDto: CreateCategoryDto, @Req() req) {
		return this.categoryService.create(createCategoryDto, +req.user.id)
	}

	@Get()
	@UseGuards(JwtAuthGuard)
	findAll(@Req() req) {
		return this.categoryService.findAll(+req.user.id)
	}

	@Get(':type/:id')
	@UseGuards(JwtAuthGuard, authorGuard)
	fingOne(@Param('id') id: string) {
		return this.categoryService.findOne(+id)
	}

	@Patch(':type/:id')
	@UseGuards(JwtAuthGuard, authorGuard)
	update(
		@Param('id') id: string,
		@Body() updateCategoryDto: UpdateCategoryDto,
	) {
		return this.categoryService.update(+id, updateCategoryDto)
	}

	@Delete(':type/:id')
	@UseGuards(JwtAuthGuard, authorGuard)
	remove(@Param('id') id: string) {
		return this.categoryService.remove(+id)
	}
}
