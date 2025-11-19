import React from 'react';
import { Clock, BookOpen, ChevronRight, ChefHat } from 'lucide-react';
import { Course } from '../types';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent opacity-60"></div>
        <div className="absolute top-4 right-4 bg-gold-500 text-zinc-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {course.level}
        </div>
        <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
            <ChefHat size={16} />
            <span className="text-sm font-medium">Formation Certifiante</span>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-serif font-bold text-zinc-900 mb-2">{course.title}</h3>
        <p className="text-zinc-500 text-sm mb-4 flex-1 line-clamp-3">
          {course.description}
        </p>
        
        <div className="mb-4">
            <p className="text-xs font-bold text-zinc-400 uppercase mb-2">Modules inclus :</p>
            <ul className="text-sm text-zinc-600 space-y-1">
                {course.modules.slice(0, 3).map((mod, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                        {mod}
                    </li>
                ))}
            </ul>
        </div>

        <div className="space-y-4 mt-auto">
          <div className="flex items-center justify-between text-sm text-zinc-600 border-t border-zinc-100 pt-4">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-gold-500" />
              <span>{course.duration}</span>
            </div>
            <div className="font-bold text-gold-600 text-lg">{course.price}</div>
          </div>
          
          <Link to="/contact" className="block w-full">
            <button className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white py-3 rounded-lg hover:bg-zinc-800 transition-colors group-hover:bg-gold-500 group-hover:text-zinc-900 font-medium">
              S'inscrire
              <ChevronRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};