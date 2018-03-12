"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSortField(sort) {
    return !!sort && (sort['op'] === 'count' || !!sort['field']) && !!sort['op'];
}
exports.isSortField = isSortField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBMkJBLHFCQUErQixJQUE4QjtJQUMzRCxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUZELGtDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZ2dyZWdhdGVPcH0gZnJvbSAndmVnYSc7XG5cblxuZXhwb3J0IHR5cGUgU29ydE9yZGVyID0gJ2FzY2VuZGluZycgfCAnZGVzY2VuZGluZycgfCBudWxsO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRGaWVsZDxGPiB7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBbZmllbGRdKGZpZWxkLmh0bWwpIHRvIHNvcnQgYnkuXG4gICAqXG4gICAqIF9fRGVmYXVsdCB2YWx1ZTpfXyBJZiB1bnNwZWNpZmllZCwgZGVmYXVsdHMgdG8gdGhlIGZpZWxkIHNwZWNpZmllZCBpbiB0aGUgb3V0ZXIgZGF0YSByZWZlcmVuY2UuXG4gICAqL1xuICBmaWVsZD86IEY7XG4gIC8qKlxuICAgKiBBbiBbYWdncmVnYXRlIG9wZXJhdGlvbl0oYWdncmVnYXRlLmh0bWwjb3BzKSB0byBwZXJmb3JtIG9uIHRoZSBmaWVsZCBwcmlvciB0byBzb3J0aW5nIChlLmcuLCBgXCJjb3VudFwiYCwgYFwibWVhblwiYCBhbmQgYFwibWVkaWFuXCJgKS5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyByZXF1aXJlZCBpbiBjYXNlcyB3aGVyZSB0aGUgc29ydCBmaWVsZCBhbmQgdGhlIGRhdGEgcmVmZXJlbmNlIGZpZWxkIGRvIG5vdCBtYXRjaC5cbiAgICogVGhlIGlucHV0IGRhdGEgb2JqZWN0cyB3aWxsIGJlIGFnZ3JlZ2F0ZWQsIGdyb3VwZWQgYnkgdGhlIGVuY29kZWQgZGF0YSBmaWVsZC5cbiAgICpcbiAgICogRm9yIGEgZnVsbCBsaXN0IG9mIG9wZXJhdGlvbnMsIHBsZWFzZSBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIFthZ2dyZWdhdGVdKGFnZ3JlZ2F0ZS5odG1sI29wcykuXG4gICAqL1xuICBvcDogQWdncmVnYXRlT3A7XG5cbiAgLyoqXG4gICAqIFRoZSBzb3J0IG9yZGVyLiBPbmUgb2YgYFwiYXNjZW5kaW5nXCJgIChkZWZhdWx0KSBvciBgXCJkZXNjZW5kaW5nXCJgLlxuICAgKi9cbiAgb3JkZXI/OiBTb3J0T3JkZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NvcnRGaWVsZDxGPihzb3J0OiBTb3J0T3JkZXIgfCBTb3J0RmllbGQ8Rj4pOiBzb3J0IGlzIFNvcnRGaWVsZDxGPiB7XG4gIHJldHVybiAhIXNvcnQgJiYgKHNvcnRbJ29wJ10gPT09ICdjb3VudCcgfHwgISFzb3J0WydmaWVsZCddKSAmJiAhIXNvcnRbJ29wJ107XG59XG4iXX0=